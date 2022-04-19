function nuevoEnemigo () {
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        Enemigo.change(LedSpriteProperty.Y, 1)
        basic.pause(Tiempo)
    }
}
input.onButtonPressed(Button.A, function () {
    Cuadrado.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Cuadrado.change(LedSpriteProperty.X, 1)
})
let Enemigo: game.LedSprite = null
let Tiempo = 0
let Cuadrado: game.LedSprite = null
Cuadrado = game.createSprite(2, 4)
Tiempo = 500
game.setScore(0)
nuevoEnemigo()
basic.forever(function () {
    if (Enemigo.isTouching(Cuadrado)) {
        basic.showIcon(IconNames.Chessboard)
        game.gameOver()
    } else if (Enemigo.isTouchingEdge()) {
        game.addScore(1)
        Enemigo.delete()
        nuevoEnemigo()
    }
})
