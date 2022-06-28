import openai
from datetime import datetime as dt
from utils import add_class, remove_class

# get API key
os.environ['API_KEY'] = "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"

# this array will have the command as index 0, and the raw input as index 1, concatenated into full prompt
_prompt = []
response = "null"

# define the task template that will be use to render new templates to the page
proj_template = Element("proj-template").select(".aiproj", from_content=True)
new_input_content = Element("new-input-content")
new_openai_out = Element('new-openai-out').element.innerText = response

openai.api_key = os.getenv("API_KEY")

def add_command(*ags, **kws):
    # ignore empty task
    if not new_input_content.element.value:
        return None

    # append prompt
    _prompt.append(new_input_content.element.value)


def add_raw(*ags, **kws):
    # ignore empty task
    if not new_input_content.element.value:
        return None

    # create task
    _prompt.append(new_input_content.element.value)

def add_prompt_event(e):
    if e.key == "Enter":
        add_command()
        add_raw()

new_input_content.element.onkeypress = add_prompt_event

def show_result():
    response = openai.Completion.create(
        model="text-davinci-002",
        prompt=_prompt,
    )
    print(new_openai_out.element.value)



"""
keyboardInput = input("input your openAI prompt: ")

response = openai.Completion.create(
    model="text-davinci-002",
    prompt=keyboardInput,
)

print(response)
"""
