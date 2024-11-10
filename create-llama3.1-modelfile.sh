#!/bin/bash

model_name="llama3.1"
custom_model_name="crewai-llama3.1"

ollama pull $model_name

ollama create $custom_model_name -f ./Llama3.1Modelfile