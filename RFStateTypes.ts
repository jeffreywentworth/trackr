import {Node, Edge, OnNodesChange, OnEdgesChange, OnConnect,} from 'react-flow-renderer'

export default interface RFState {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
};