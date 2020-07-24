() => (
  <Picker
    items={[
      {
        media: (
          <img
            src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
            alt="illustration"
          />
        ),
        title: 'Send money',
        content: <p>Click here to be redirected to transferflow.</p>,
      },
      {
        media: (
          <img
            src="https://transferwise.com/public-resources/assets/bank-details/bank-details-flow/finish.svg"
            alt="illustration"
          />
        ),
        title: 'Reveive money',
        content: <p>Click here to be redirected to bank details flow.</p>,
      },
    ]}
  />
);
