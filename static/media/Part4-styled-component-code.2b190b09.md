# Creating and using Styled Components

## Creating a Styled Component

Styled Components has it's own API for defining components.

```js
const Card = styled.div`
  border-radius: 2px;
  border: 1px solid #999999;
  box-shadow: 0 2px 2px rgba(50, 50, 50, 0.4);
`;
```

The CSS inside the template literal is extracted and turned into an CSS class, which is then applied to the `div` created when this component is rendered.

## Using a Styled Component

The Styled Component defined above generates a normal React component that can be imported/ used anywhere.

```js
function ProfileCard(props) {
  return (
    <Card>
      // ...rest of components...
    </Card>
  )
}
```
