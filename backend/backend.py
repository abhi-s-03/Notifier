from flask import Flask, request
from flask_cors import CORS
import msg

app = Flask(__name__)
CORS(app)

@app.route('/url', methods=['POST'])
def url():
    data = request.get_json()
    age_range = data['ageRange']
    time = data['time']
    mode = data['mode']
    type = data['type']

    user = 'test-001'
    
    print(f"Age: {age_range}")
    print(f"Time: {time}")
    print(f"Mode: {mode}")
    print(f"Resource Type: {type}")

    if age_range == 'a': age = 'children'
    elif age_range == 'b': age = 'teenagers'
    else: age = 'adults'

    if type == 'all':
        message = msg.get_resources(age)
        print(message)
        msg.push_notification(message,user)
    
    elif type == 'dep':
        days = 10
        message = msg.send_notification_dep(days,user)


    return message

if __name__ == '__main__':
    app.run(debug=True)
