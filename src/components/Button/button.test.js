test("it renders without crashing", () => {
  const buttons = document.querySelectorAll('.js-button');
  expect(buttons.length).toBe(0);
})