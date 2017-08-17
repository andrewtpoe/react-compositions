```js

function ColorBySize() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Bar
        modifiers={['fullHeight', 'tall']}
        responsiveModifiers={{
          [SM]: ['level_1'],
          [MD]: ['level_2'],
          [XL]: ['level_1']
        }}
      />
    </ReactiveContainer>
  );
}

```
