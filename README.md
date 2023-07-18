# Light DOM examples

## Installing using a Scratch Org

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

   - Enable Dev Hub in your Trailhead Playground
   - Install Salesforce CLI
   - Install Visual Studio Code
   - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):

   ```
   sf org login web -d -a myhuborg
   ```

1. Clone this repository:

   ```
   git clone https://github.com/albarivas/light-dom
   cd light-dom
   ```

1. Create a scratch org and provide it with an alias (**light-dom** in the command below):

   ```
   sf org create scratch -d -f config/project-scratch-def.json -a light-dom
   ```

1. Push the app to your scratch org:

   ```
   sf project deploy start

   ```

1. Assign the **Light_DOM** permission set to the default user:

   ```
   sf org assign permset -n Light_DOM
   ```

1. Open the scratch org:

   ```
   sf org open
   ```
