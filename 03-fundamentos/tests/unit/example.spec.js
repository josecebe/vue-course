describe('Example Component', () => {
    test('Should be greater than 10', () => {
        // Arrange
        let value = 9;

        // Act
        value = value + 2;

        // Assert
        expect(value).toBeGreaterThan(10);
    });
});
