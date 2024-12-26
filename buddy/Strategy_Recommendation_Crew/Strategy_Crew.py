from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task

@CrewBase
class Strategy_crew():

  @agent 
  def sales_strategy_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['sales_strategy_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def sales_pipeline_optimization_task(self) -> Task:
    return Task(
        config=self.tasks_config['sales_pipeline_optimization_task'],
        agents=self.sales_strategy_agent()
    )
  
  @agent 
  def marketing_strategy_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['marketing_strategy_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def marketing_campaign_design_task(self) -> Task:
    return Task(
        config=self.tasks_config['marketing_campaign_design_task'],
        agents=self.marketing_strategy_agent()
    )
  
  @agent 
  def operational_efficiency_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['operational_efficiency_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def process_improvement_task(self) -> Task:
    return Task(
        config=self.tasks_config['process_improvement_task'],
        agents=self.operational_efficiency_agent()
    )
  
  @agent 
  def risk_assessment_agent(self) -> Agent:
    return Agent(
      config=self.agents_config['risk_assessment_agent'],
      llm=LLM(
        model="",
        max_tokens=6900
      ),
      verbose=True
    )
  
  @task
  def risk_identification_task(self) -> Task:
    return Task(
        config=self.tasks_config['risk_identification_task'],
        agents=self.risk_assessment_agent()
    )
  
  @crew
  def crew(self) -> Crew:
      """Creates the Strategy recommandation Crew"""
      return Crew(
          agents=self.agents,  # Automatically created by the @agent decorator
          tasks=self.tasks,  # Automatically created by the @task decorator
          process=Process.sequential,
          verbose=True,
          memory=True
      )