import React from 'react';

// const TweetComments = (props) => {
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }


//if-Else
// const TweetComments = (props) => {

//     if (props.comments.length === 0) {
//         return <div>No comments ..... Sorry</div>
//     }
//     else {
//         return (
//             <div className="tweet-comments">
//                 <div className="tweet-count">
//                     There are {props.comments.length} comments{" "}
//                 </div>
//                 <TweetList comments={props.comments} />
//             </div>
//         )
//     }
// }



//null and Gurd cluse
// const TweetComments = (props) => {
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }



//jsx
// let Error = <span className="error">There wae an Error,Please Fix</span>;
// const TweetComments = (props) => {
//     if (props.comments.length === 0) {
//         return (
//             <div className="tweet-comments">
//                 {Error}
//                 <div className="tweet-count">
//                     There are {props.comments.length} comments{" "}
//                 </div>
//             </div>
//         )
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }




//Ternary Oprator
// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>
//             </div>
//             {Show ? <TweetList comments={props.comments} /> : null}
//         </div>
//     )
// }



//Short circuit
// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>
//             </div>
//             {Show && <TweetList comments={props.comments} />}
//         </div>
//     )
// }




//IIFE
// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>

//             </div>
//             {(() => {
//                 if (!Show) return null;
//                 return (<TweetList comments={props.comments} />)
//             })()}
//         </div>
//     )
// }



//Custom Conditional Component 1
// const IF = ({ Conditional, children }) => {
//     if (Conditional) return children;
//     return null;
// }

// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>
//             </div>
//             <IF Conditional={Show}>
//                 <TweetList comments={props.comments} />
//             </IF>

//         </div>
//     )
// }



//Custom Conditional Component 2
// const IF = ({ Conditional, component }) => {
//     if (Conditional) return component;
//     return null;
// }

// const TweetComments = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>
//             </div>
//             <IF Conditional={Show} component={<TweetList comments={props.comments} />} />

//         </div>
//     )
// }



//Higher Order Component
const IF = ({ Conditional, component }) => {
    if (Conditional) return component;
    return null;
}
//in console just type localStorage.setItem("user","dev")
const WithAuth = (Component) => {
    if (localStorage.getItem("user")) {
        return (props) => <Component {...props} />
    }
    return () => <span className="error">Please Authenticated Yourself</span>
}

const TweetComments = WithAuth((props) => {
    const [Show, setShow] = React.useState(false);
    if (props.comments.length === 0) {
        return null;
    }
    return (
        <div className="tweet-comments">
            <div className="tweet-count">
                There are {props.comments.length} comments{" "}
                <button onClick={() => setShow(!Show)}>{Show ? "hide" : "show"}</button>
            </div>
            <IF Conditional={Show} component={<TweetList comments={props.comments} />} />
        </div>
    )
})









const TweetList = ({ comments }) => (
    <ul>
        {comments.map((comment) => (
            <li key={comment.user} className="tweet-comment">
                <span className="tweet-comment__name">{comment.name}</span>
                <span className="tweet-comment__user">{comment.user}</span>
                <p>{comment.text}</p>
            </li>
        ))}
    </ul>
);

export default TweetComments;