---
title: "React Notes"
publishedAt: 2024-01-29
description: "Some react pointers that I liked to wrote + copy-pasted from other sites to understand React better"
slug: "react-notes"
isPublish: true
---

- One of the most important rules is, see where the state lives.

- 90% of the cases performance problems in React can be summarised as “too many re-renders”. (Another 10% are: “renders are too heavy” and “really weird stuff that need further investigation”.)

- If your component manages state, find parts of the render tree that don’t depend on the changed state and memoise them to minimize their re-renders.

- Children of the parent re-render everytime parent re-renders. Sometimes the state which is passed on to children might not be changing but due to some other state changed in the parent the child also gets re-rendered. To prevent this, use useMemo and pass in the dependencies to make the child re-render only when the dependencies change.

- you can think of useMemo as making a child independent out of its parent state

- Never create new components inside the render function of another component. Because on every render of the component the new components if defined inside will always remount. And remounting(remove from dom tree and again add it to the dom tree) is costly compared to re-render(react-magic)

- Provider-consumer combination, so every time the value on the provider changes, **all** of the consumers will re-render

- When using context, make sure that value property is always memoised if it’s not a number, string or boolean.

- React components re-render when a component's state changes, when a parent component re-renders, when a component uses context and the value of its provider changes, when hooks change 

- Everything that is happening inside a hook “belongs” to the component that uses it
