// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface InterviewNodeState {
//     type: string,
//     companyName: string,
//     date: Date,
// }

// const initialState: InterviewNodeState = {
//     type: "",
//     companyName: "",
//     date: undefined,
// }

// const interviewNodeSlice = createSlice({
//     name: 'interviewNode',
//     initialState,
//     reducers: {
//         //adding interview
//         createdInterview(state, action: PayloadAction<object>) {
//             state.type = action.payload
//             state.companyName = 'new data'
//             state.date = action.payload
//         },
//         //removing interview
//         deletedInterview(state) {
//             state.type = ''
//             state.companyName = ''
//         }
//     }
// })

// export const { createdInterview, deletedInterview } = interviewNodeSlice.actions;
// export default interviewNodeSlice.reducer;
