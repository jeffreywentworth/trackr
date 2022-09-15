import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Node, Edge} from "react-flow-renderer"

interface VisualizerState {
  nodes: Node[],
  edges: Edge[]
}

const initialState: VisualizerState = {
    nodes: [],
    edges: []
}

const visualizerSlice = createSlice({
    name: "visualizer",
    initialState,
    reducers: {

    }
})