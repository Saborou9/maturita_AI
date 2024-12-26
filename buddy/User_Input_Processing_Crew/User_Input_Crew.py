from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task

@CrewBase
class User_Input_Crew():
    """User Input Crew"""

    @agent
    def intent_detector(self) -> Agent:
        return Agent(
            config=self.agents_config['intent_detector'],
            llm=LLM(
                model="",
                max_tokens=3000
            ),
            verbose=True
        )

    @task
    def intent_classification_task(self) -> Task:
        return Task(
            config=self.tasks_config['intent_classification_task'],
            agents=self.intent_detector()
        )
    
    @agent
    def entity_extractor(self) -> Agent:
        return Agent(
            config=self.agents_config['entity_extractor'],
            verbose=True
        )
    
    @task
    def entity_extraction_task(self) -> Task:
        return Task(
            config=self.tasks_config['entity_extraction_task']
        )

    @agent
    def context_manager(self) -> Agent:
        return Agent(
            config=self.agents_config['context_manager'],
            verbose=True
        )

    @task
    def context_management_task(self) -> Task:
        return Task(
            config=self.tasks_config['context_management_task']
        )

    @crew
    def User_input_crew(self) -> Crew:
        """Creates the User Input Crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
            memory=True
        )