import datetime
import json
import os
from typing import Any, Optional, Type

import requests
from crewai.tools import BaseTool
from pydantic import BaseModel, Field


def _save_results_to_file(content: str) -> None:
    """Saves the search results to a file."""
    filename = f"search_results_{datetime.now().strftime('%Y-%m-%d_%H-%M-%S')}.txt"
    with open(filename, "w") as file:
        file.write(content)
    print(f"Results saved to {filename}")


class SerperDevToolSchema(BaseModel):
    """Input for SerperDevTool."""

    search_query: str = Field(
        ..., description="Mandatory search query you want to use to search the internet"
    )


class SerperTool(BaseTool):
    name: str = "Search the internet"
    description: str = (
        "A tool that can be used to search the internet with a search_query."
    )
    args_schema: Type[BaseModel] = SerperDevToolSchema
    search_url: str = "https://google.serper.dev/search"
    country: Optional[str] = ""
    location: Optional[str] = ""
    locale: Optional[str] = ""
    n_results: int = 10
    save_file: bool = False

    def _run(
        self,
        **kwargs: Any,
    ) -> Any:

        search_query = kwargs.get("search_query") or kwargs.get("query")
        save_file = kwargs.get("save_file", self.save_file)
        n_results = kwargs.get("n_results", self.n_results)

        payload = {"q": search_query, "num": n_results, "tbs": "qdr:d"}

        if self.country != "":
            payload["gl"] = self.country
        if self.location != "":
            payload["location"] = self.location
        if self.locale != "":
            payload["hl"] = self.locale

        payload = json.dumps(payload)

        headers = {
            "X-API-KEY": os.environ["SERPER_API_KEY"],
            "content-type": "application/json",
        }

        response = requests.request(
            "POST", self.search_url, headers=headers, data=payload
        )
        results = response.json()

        if "topStories" in results:
            stories = results["topStories"][:self.n_results]
            string = []
            for story in stories:
                try:
                    string.append(
                        "\n".join(
                            [
                                f"Title: {story['title']}",
                                f"Link: {story['link']}",
                                f"Source: {story['source']}",
                                f"Date: {story['date']}",
                                "---",
                            ]
                        )
                    )
                except KeyError:
                    continue

            content = "\n".join(string)
            if save_file:
                _save_results_to_file(content)
            return f"\nSearch results: {content}\n"
        else:
            return results