#!/usr/bin/env python
import sys
from buddy.User_Input_Processing_Crew.User_Input_Crew import User_Input_Crew
from buddy.Data_Gathering_and_Analysis_Crew.Data_Analysis_Crew import Data_Analysis_crew
from buddy.Strategy_Recommendation_Crew.Strategy_Crew import Strategy_crew
from buddy.

def run():
    """
    Run the crew.
    """
    inputs = {
        'topic': 'AI LLMs'
    }
    crew().kickoff(inputs=inputs)