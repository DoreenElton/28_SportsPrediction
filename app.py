from flask import Flask, request, render_template
from flask_cors import CORS
import pandas as pd
import pickle
import bz2
from os.path import join, dirname, realpath

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template('index.html')


@app.route("/predict", methods=['POST'])
def predict_test():

    input = request.form
    x = pd.DataFrame(input, index=[0])

    UPLOADS_PATH = join(dirname(realpath(__file__)), 'static/model/')
    ifile = bz2.BZ2File(UPLOADS_PATH+"model.pkl", 'rb')
    rf_model = pickle.load(ifile)
    ifile.close()

    y_pred = rf_model.predict(x)

    return render_template(
        'outcome.html',
        prediction=int(y_pred[0]))

if __name__ == "__main__":
    app.run(host="0.0.0.0")