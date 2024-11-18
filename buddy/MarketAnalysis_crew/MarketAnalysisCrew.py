from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool

@CrewBase
class MarketAnalysisCrew():
    """Market Analysis Crew"""

    @agent
    def trend_researcher(self) -> Agent:
        return Agent(
            config=self.agents_config['trend_researcher'],
            tools=[SerperDevTool()],
            verbose=True
        )

    @agent
    def competitor_analyst(self) -> Agent:
        return Agent(
            config=self.agents_config['competitor_analyst'],
            verbose=True
        )

    @agent
    def audience_insights_specialist(self) -> Agent:
        return Agent(
            config=self.agents_config['audience_insights_specialist'],
            verbose=True
        )

    @task
    def trend_analysis_task(self) -> Task:
        return Task(
            config=self.tasks_config['trend_analysis_task']
        )

    @task
    def competitor_analysis_task(self) -> Task:
        return Task(
            config=self.tasks_config['competitor_analysis_task']
        )

    @task
    def audience_insights_task(self) -> Task:
        return Task(
            config=self.tasks_config['audience_insights_task']
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Market Analysis Crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
        )