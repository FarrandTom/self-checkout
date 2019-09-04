# Getting Started...

1. Clone the repository `git clone https://github.com/FarrandTom/self-checkout.git`

2. Create an appropriate virtual environment, using `backend_tf/environment.yml`. This can be achieved by running the command: `conda create --name self_checkout --file environment.yml`
You will then need to pip install two packages within that environment. Therefore, after you activate the environment (e.g. `conda activate self_checkout`) run: 
`pip install flask_cors` (This package is not on a conda channel)
`pip install imageio` (This installs pillow with the module for webpack images- which the conda install does not)

3. To start the backend, which serves the object detection model, change into the `backend_tf/` folder, and then run `python app.py`.

4. To run the application front end `npm start`

5. You should then be able to capture images of bananas, apples, and oranges which will register in the price UI. The initial inference usually takes longer than subsequent images, so bear that in mind.

## Docker Build Instructions
Follow the instructions below to build this docker container and run the app. Please have a look at the [Docker documentation](https://docs.docker.com/) for further details.

1. Clone the repository


#### `git clone https://github.com/FarrandTom/self-checkout.git`

2. Navigate to the code repository


#### `cd self-checkout`


3. Build the docker container


#### `docker build -t selfcheckout:1.0 .`


4. Run the container. 
Note: We run the container in detached mode because when the front-end starts alongiside the container. We need to execute a second command to run the backend.


#### `docker run -d --name selfcheckout -p 3000:3000 -p 5000:5000 selfcheckout:1.0`


5. Run this command to start the backend server


#### `docker exec -it selfcheckout python3 /usr/src/app/backend_tf/app.py`

6. Open your browser and use this url


#### `http://localhost:3000`
