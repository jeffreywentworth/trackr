import './styles.scss'

//script

// 
    // const nodeInfoToggle = false
    // let nodeId;
            // (onclick of node)=> nodeID = (nodeId) ***nodeId is value assigned from database upon submission of node?****
// initial state = [nodeInfo, nodeId]

//nodeId needs to be a property ON each node that is accessible with each click of the node
//nodeId is first assigned to that node once it has been created
///actual assignment comes from DB response upon submission of Node

//onclick of each node render NodeInfoDisplayOverlay via nodeInfoToggle reassignment to true
  //dependent upon which node is clicked - information is populated by DB
    //node(onclick) => query to DB (enter query here), nodeInfoToggle = true


//markdown

export default function Display() {

  return(
    <div className='overlay-container'>
      <h1>
        title goes here
      </h1>
      <div className='overlay-content'>
        content inside of overlay
      </div>
      <footer>
        footer things
      </footer>
    </div>
  )
}