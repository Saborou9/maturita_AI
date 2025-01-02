from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task
from tools.serper_tool import SerperTool
from crewai_tools.tools import WebsiteSearchTool

@CrewBase
class Data_Analysis_crew():

  @agent 
  def market_research_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['market_research_agent'],
      llm=LLM(
        model="anthropic/claude-3-5-haiku-20241022",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def market_trend_analysis_task(self) -> Task:
    return Task(
        config=self.tasks_config['market_trend_analysis_task'],
        agents=self.market_research_agent()
    )
  
  @agent 
  def competitor_analysis_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['competitor_analysis_agent'],
      llm=LLM(
        model="anthropic/claude-3-5-haiku-20241022",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def competitor_swot_analysis_task(self) -> Task:
    return Task(
        config=self.tasks_config['competitor_swot_analysis_task'],
        agents=self.competitor_analysis_agent()
    )
  
  @agent 
  def audience_insights_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['audience_insights_agent'],
      llm=LLM(
        model="gpt-4o-mini-2024-07-18",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def audience_segmentation_task(self) -> Task:
    return Task(
        config=self.tasks_config['audience_segmentation_task'],
        agents=self.audience_insights_agent()
    )
  
  @task
  def opportunity_gap_analysis_task(self) -> Task:
    return Task(
        config=self.tasks_config['opportunity_gap_analysis_task'],
        agents=self.market_research_agent()
    )
  
  @crew
  def Data_analysis_crew(self) -> Crew:
      """Creates the Data Analysis Crew"""
      return Crew(
          agents=self.agents,  # Automatically created by the @agent decorator
          tasks=self.tasks,  # Automatically created by the @task decorator
          process=Process.sequential,
          verbose=True,
          memory=True
      )