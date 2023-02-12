//  
import React, { useState } from 'react';
 
// export function FComponent(props) {
//     return (
//         <div>
//             firstName: {props.firstName} <br/>
//             lastName: {props.lastName}
//         </div>
//     )
// }
export function FComponent({ firstName, lastName, age }) {
    return (
        <div>
            firstName: {firstName}<br/>
            lastName: {lastName}<br/>
            age: {age}
        </div>
    );
}


FComponent.defaultProps = {
    firstName: 'Anna',
    lastName: 'Koger',
    age: 35,
}

// export const CComponent = () => {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//         <div>count: {count}</div>
//         <button onClick={() => setCount(1)}>+</button>
//         </>
//     )
// }

export const CComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <InnerComponent setCount={setCount} count={count}>
            <ClassComponent/>
         </InnerComponent>
               </>
               )
           }
           
        {/* <InnerComponent setCount={setCount} count={count} component={<ClassComponent/>}>
            <diV>Child</diV>
        </InnerComponent> */}


function InnerComponent ({setCount, count, component, children}) {
    if(component) console.log('privet');
    return (
    <>
    <button onClick={() => setCount(count - 1)}>-</button>
    {component && (<>privet</>)} 
    {/* esli estj komponent if...-&& */}
    {children}
    </>
    )
}

export class ClassComponent extends React.Component {
    render() {
        return (
            <div>ClassComponent</div>
        )
    }
}


// export const CComponent = () => {
//     comst [count, setCount] = useState(0);

//     return (
//         <>
//         <div>count: {count}</div>
//         <button onClick={() => setCount(count + 1)}>+</button>
//         <InnerComponent setCount={setCount} count={count} />
//         </>
//     )
// }
// function InnerComponent({ setCount, count }) {
//     return (
//         <>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         </>
//     )
// }
// HomeWork 1

export function MotherComponent() {
     const [show, setShow] = useState(false);

    return (
        <>
        <button onClick={() => setShow(!show)}>Toggle Show</button>
        {show ? <ChildComponent/> : ''} 
        {/* ili mozno tak
        {show && <ChildComponent/>} */}
        </>
    )
}
const ChildComponent = () => <div>ChildComponent</div>;

// ili
// function ChildComponent() {
//     return (
//         <div>ChildComponent</div>
//     )
// }


