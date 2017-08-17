```js

function ReactiveGrid() {
  return (
    <ReactiveContainer breakpoints={BREAKPOINTS}>
      <Row>
        <Column
          responsiveModifiers={{
            [XS]: ['col_12'],
            [SM]: ['col_3'],
            [MD]: ['col_2'],
            [LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [XS]: ['col_6'],
            [SM]: ['col_6'],
            [MD]: ['col_8'],
            [LG]: ['col_10'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [XS]: ['col_6'],
            [SM]: ['col_3'],
            [MD]: ['col_2'],
            [LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
      </Row>
      <Row>
        <Column
          responsiveModifiers={{
            [XS]: ['col_12'],
            [SM]: ['col_3'],
            [MD]: ['col_2'],
            [LG]: ['col_1'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [XS]: ['col_12'],
            [SM]: ['col_9'],
            [MD]: ['col_10'],
            [LG]: ['col_11'],
          }}
        >
          <Bar />
        </Column>
      </Row>
      <Row>
        <Column
          responsiveModifiers={{
            [XS]: ['col_10'],
            [SM]: ['col_6'],
            [MD]: ['col_8'],
            [LG]: ['col_10'],
          }}
        >
          <Bar />
        </Column>
        <Column
          responsiveModifiers={{
            [XS]: ['col_2'],
            [SM]: ['col_6'],
            [MD]: ['col_4'],
            [LG]: ['col_2'],
          }}
        >
          <Bar />
        </Column>
      </Row>
    </ReactiveContainer>
  );
}

```
