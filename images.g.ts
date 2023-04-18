// Auto-generated code. Do not edit.
namespace myImages {

    helpers._registerFactory("image", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "image1":
            case "dino":return img`
. . . . . . . . . . . . . . . . 
. . . . c c c c . . . . . . . . 
. . c c 5 5 5 5 c c . . . . . . 
. c 5 5 5 5 5 5 5 5 c . . . . . 
c 5 5 5 5 5 1 f 5 5 5 c . . . . 
c 5 5 5 5 5 f f 5 5 5 5 c . . . 
c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
c c b b 1 b 5 5 5 5 5 5 d c . . 
c 5 3 3 3 5 5 5 5 5 d d d c . . 
. b 5 5 5 5 5 5 5 5 d d d c . . 
. . c b b c 5 5 b d d d d c c . 
. c b b c 5 5 b b d d d d c d c 
. c c c c c c d d d d d d d d c 
. . . c c c c d 5 5 b d d d c . 
. . c c c c c b 5 5 b c c c . . 
. . c b b b c d 5 5 b c . . . . 
`;
            case "image2":
            case "bomb":return img`
. . . . . . . . . . 4 5 . . . . 
. . . . . . . . . . 2 4 . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . f . . . . . . . 
. . . . . . c b b b . . . . . . 
. . . . . c c c c c b . . . . . 
. . . . c c c c c c c b . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c c c c c c . . . . 
. . . . f c c c c c c c . . . . 
. . . . . f c c c c c . . . . . 
. . . . . . f f f c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`;
            case "image4":
            case "ghost":return img`
........................
........................
........................
........................
..........ffff..........
........ff1111ff........
.......fb111111bf.......
.......f11111111f.......
......fd11111111df......
......fd11111111df......
......fddd1111dddf......
......fbdbfddfbdbf......
......fcdcf11fcdcf......
.......fb111111bf.......
......fffcdb1bdffff.....
....fc111cbfbfc111cf....
....f1b1b1ffff1b1b1f....
....fbfbffffffbfbfbf....
.........ffffff.........
...........fff..........
........................
........................
........................
........................
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "explosion":
            case "anim1":return [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . 4 5 5 4 . . . . . . 
. . . . . . 2 5 5 2 . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 4 . . . . . 
. . . . 2 . . . . 4 4 . . . . . 
. . . . 2 4 . . 4 5 4 . . . . . 
. . . . . 2 4 d 5 5 4 . . . . . 
. . . . . 2 5 5 5 5 4 . . . . . 
. . . . . . 2 5 5 5 5 4 . . . . 
. . . . . . 2 5 4 2 4 4 . . . . 
. . . . . . 4 4 . . 2 4 4 . . . 
. . . . . 4 4 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. 3 . . . . . . . . . . . 4 . . 
. 3 3 . . . . . . . . . 4 4 . . 
. 3 d 3 . . 4 4 . . 4 4 d 4 . . 
. . 3 5 3 4 5 5 4 4 d d 4 4 . . 
. . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
. . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
. 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
. 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
. 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
. . 4 3 d 5 5 5 d 5 5 d d d 4 . 
. 4 5 5 d 5 5 5 d d d 5 5 4 . . 
. 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
. 4 4 d d 4 d d d 4 3 d d 4 . . 
. . 4 5 4 4 4 4 4 4 4 4 4 . . . 
. 4 5 4 . . 4 4 4 . . . 4 4 . . 
. 4 4 . . . . . . . . . . 4 4 . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . b b . b b b . . . . . 
. . . . b 1 1 b 1 1 1 b . . . . 
. . b b 3 1 1 d d 1 d d b b . . 
. b 1 1 d d b b b b b 1 1 b . . 
. b 1 1 1 b . . . . . b d d b . 
. . 3 d d b . . . . . b d 1 1 b 
. b 1 d 3 . . . . . . . b 1 1 b 
. b 1 1 b . . . . . . b b 1 d b 
. b 1 d b . . . . . . b d 3 d b 
. b b d d b . . . . b d d d b . 
. b d d d d b . b b 3 d d 3 b . 
. . b d d 3 3 b d 3 3 b b b . . 
. . . b b b d d d d d b . . . . 
. . . . . . b b b b b . . . . . 
`];
        }
        return null;
    })

    helpers._registerFactory("song", function(name: string) {
        switch(helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.
