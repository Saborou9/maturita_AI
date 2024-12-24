#!/usr/bin/env python
import sys
from buddy.User_Input_Processing_Crew.User_Input_Crew import crew

def run():
    """
    Run the crew.
    """
    inputs = {
        'topic': 'AI LLMs'
    }
    crew().kickoff(inputs=inputs)