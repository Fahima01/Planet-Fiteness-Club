import React from 'react';

const Qna = () => {
    return (
        <div >
            <h2>How does React works? </h2>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We strongly recommend typing code by hand as you’re working through the tutorial and not using copy/paste. This will help you develop muscle memory and a stronger understanding.
            </p>
            <h2>What is the difference between state and props in React?</h2>
            <p>hese lists should help guide you when working with data in your components.

                Props

                are immutable
                which lets React do fast reference checks
                are used to pass data down from your view-controller
                your top level component
                have better performance
                use this to pass data to child components
                State

                should be managed in your view-controller
                your top level component
                is mutable
                has worse performance
                should not be accessed from child components
                pass it down with props instead
            </p>
            <h2>Different use of useeffect in react</h2>
            <p>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

                Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

                Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

            </p>
        </div>
    );
};

export default Qna;