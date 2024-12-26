from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task
from tools.serper_tool import SerperTool
from crewai_tools.tools import WebsiteSearchTool

@CrewBase
class Fact_check_crew():

  @agent 
  def content_validation_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['content_validation_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def fact_checking_task(self) -> Task:
    return Task(
        config=self.tasks_config['fact_checking_task'],
        agents=self.content_validation_agent()
    )
  
  @agent 
  def consistency_review_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['consistency_review_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def consistency_review_task(self) -> Task:
    return Task(
        config=self.tasks_config['consistency_review_task'],
        agents=self.consistency_review_agent()
    )
  
  @agent 
  def accuracy_assessment_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['accuracy_assessment_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def accuracy_validation_task(self) -> Task:
    return Task(
        config=self.tasks_config['accuracy_validation_task'],
        agents=self.accuracy_assessment_agent()
    )
  
  @task
  def source_quality_review_task(self) -> Task:
    return Task(
        config=self.tasks_config['source_quality_review_task'],
        agents=self.content_validation_agent()
    )
  
  @task
  def conversation_quality_assurance_task(self) -> Task:
    return Task(
        config=self.tasks_config['conversation_quality_assurance_task'],
        agents=self.consistency_review_agent()
    )
  
  @crew
  def Fact_check_crew(self) -> Crew:
      """Creates the Fact Check Crew"""
      return Crew(
          agents=self.agents,  # Automatically created by the @agent decorator
          tasks=self.tasks,  # Automatically created by the @task decorator
          process=Process.sequential,
          verbose=True,
          memory=True
      )