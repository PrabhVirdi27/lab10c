import './App.css';

function App() {
  return (
    <body className="App">

      <h1 className="headinglarge">Problem 3 lab10c Prabh Virdi</h1>
      <br></br>
      <h3>How I installed the framework(React.js)</h3>
      <div className="steps">
      <p>Step 1: Downloaded windows 64bit node.js version from wwww.nodejs.org.</p>
      <p>Step 2: Installed the nodejs from the setup.</p>
      <p>Step 3: Created a folder called "Node js apps" on my C drive.</p>
      <p>Step 4: Used command line to go into the "Node js apps" folder.</p>
      <p>Step 5: Used the command "npx create-react-app lab10c" to install react.js in the folder.</p>
      <p>Step 6: Opened Visual Studio Code and opened the lab10c folder which was created with the react.js framework in it.</p>
      <p>Step 7: Opened the terminal in Visual Studio Code.</p>
      <p>Step 8: Executed the command "npm start" and then started editing my lab10c page using the js and css files 
        in the folder.</p>
      </div>
      <br></br>
      <h3>How I built the page and hosted using github</h3>
      <div className="steps">
      <p>Step 1: Used the js and css files to edit the page and ran the page using my local computer.</p>
      <p>Step 2: Made a repository in git called lab10c.</p>
      <p>Step 3: Opened git bash in my react page folder and typed the command "npm install gh-pages --save-dev" to install github pages.</p>
      <p>Step 4: Then initialized git using the "git init" command.</p>
      <p>Step 5: Made the remote origin to my lab10c git repository.</p>
      <p>Step 6: Used "npm run deploy" to deploy project to github pages.</p>
      <p>Step 7: Uploaded the actual code using git bash in a new branch called master in the same repository.</p>
      <p>Step 8: Went to the lab10c github repository then settings and then went to pages to get the URL for my page.</p>
      <p>Step 9: Used the URL to view my page.</p>
      </div>
      <br></br>
      <h3>Difficulties encountered and how I solved them</h3>
      <div className="steps">
      <p>Firstly, I had difficulties with the command line because I was having trouble going into 
        the right folders needed to run the different commands in. I solved this by checking and double 
        checking every folder which I was entering through the command line. 
        <br></br>
        Also, I had trouble with the commands themselves as they needed to be edited a bit to suit 
        the page names I was creating along with 
        how I wanted my page to work in the react.js framework. I solved this by looking up how the command works before 
        running it in the command line and also by paying attention to the resulting text to resolve any issues.
      </p>
      <br></br>
      </div>
      </body>
  );
}

export default App;
