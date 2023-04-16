import requests
import json
from engagespot import Engagespot
import time


#api_key = 'YOUR_API_KEY'
#url = f"https://api.engagespot.co/v1/notification/user?apikey={api_key}"
#headers = {'Content-Type': 'application/json'}


client = Engagespot(api_key="3sg50e300e56u19bds9txi", api_secret="tetrt0s10fd98de538epjhb12ibc3c47h3cca65114j3906")


def send_notification_dep(days,user):
    with open('dep.json', 'r') as f:
        data = json.load(f)
    for i in range(1, days+1):
        message = data[f'depression-{days}'][f'Day {i}']
        send_request = {
            "notification": {
                "title": "New notification",
                "message": message,
                "expire_in_seconds": 60
            },
            "recipients": [user]
        }
        response = client.send(send_request)
        time.sleep(10)
    return message


def get_resources(age_category):
    # Open the data.json file and load its content
    with open("data.json") as f:
        data = json.load(f)

    # Get the resources for the given age category
    resources = data.get(age_category)

    # If the age category does not exist in the data.json file, return an error message
    if resources is None:
        return "Sorry, we do not have any resources for that age category."

    # Create a string with the resources
    books = resources["books"]
    movies = resources["movies"]
    podcasts = resources["podcasts"]

    result = "Books:\n"
    for i, book in enumerate(books):
        result += f"{i + 1}. {book['title']} by {book['author']}\n   Link: {book['link']}\n"

    result += "\nMovies:\n"
    for i, movie in enumerate(movies):
        result += f"{i + 1}. {movie['title']} directed by {movie['director']}\n   Link: {movie['link']}\n"

    result += "\nPodcasts:\n"
    for i, podcast in enumerate(podcasts):
        result += f"{i + 1}. {podcast['title']} hosted by {podcast['host']}\n   Link: {podcast['link']}\n"

    return result

def push_notification(message,user):
    send_request = {
        "notification": {
            "title":"New notification",
            "message":message
        },
        "recipients":[user]
    }
    
    response = client.send(send_request)

if __name__ == '__main__':
    send_notification_dep(20,'test')
