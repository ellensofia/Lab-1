/**
 * 
 */
let userName;

/**
 * 
 * @returns Array with objects containing states with text and media content, 
 *          as well as text and direction for buttons.
 */
function getStates() {
    return [
        {
            id: 0,
            title: 'The dog is missing',
            message: `You come home one day to find your bedroom window open. You look around. Everything seems to be in place but you realize that your dog Theo is missing. He must have climbed out of the window - typical Theo. What do you do ` + userName + '?',
            option1: 'Go look for him',
            option1NextState: 2,
            option2: 'Call out from the window',
            option2NextState: 1,
            video: "assets/video/file.mp4",
        },

        {
            id: 1,
            title: 'Window',
            message: 'You look out the window and shout Theeeooo! You look left and right, but no dog as far as the eye can see. Music is played somewhere in the distance. What do you want to do next?',
            option1: 'Go out and look for him',
            option1NextState: 2,
            option2: 'Move towards the music',
            option2NextState: 4,
            video: "assets/video/window-video.mp4",
        },
        
        {
            id: 2,
            title: 'Look in the woods',
            message: "You walk around in the woods but you don't see Theo anywhere. Suddenly you see a ball come flying and land below your feet. Do you throw the ball back or do you keep it yourself",
            option1: 'Throw the ball back',
            option1NextState: 3,
            option2: 'Keep it',
            option2NextState: 8,
            video: "assets/video/woods.mp4",
        },

        {
            id: 3,
            title: 'Bicycle',
            message: "Suddenly you hear a scream. You rush out and see that you accidentally threw the ball at a cyclist that you didn't notice. What du you do?",
            option1: 'Apologize',
            option1NextState: 12,
            option2: 'Run away',
            option2NextState: 8,
            video: "assets/video/bicycle.mp4",
        },

        {
            id: 4,
            title: 'Follow the music',
            message: "You follow the music and walk for what feels like forever. It starts to rain. What do you do?",
            option1: 'Keep walking towards the music',
            option1NextState: 6,
            option2: "Return home",
            option2NextState: 5,
            video: "assets/video/swing.mp4",
        },
        
        {
            id: 5,
            title: 'Go home',
            message: "You walk home, the rain is puring. But then you hear something rustle from a pile of leaves nearby",
            option1: 'Find out what it is',
            option1NextState: 12,
            option2: "Keep walking",
            option2NextState: 7,
            video: "assets/video/video.mp4",
        },
        
        {
            id: 6,
            title: 'Party party',
            message: "Outside a house you see a group having a halloween party. Everyone is dressed up. You see an old schoolmate. He meets your gaze and calls out" + userName + "!! " + "What do you want to do?",
            option1: 'Go say hallo',
            option1NextState: 9,
            option2: "Pretend you didn't see him",
            option2NextState: 8,
            video: "assets/video/pumpkin.mp4",
        },
        
        {
            id: 7,
            title: 'Walking',
            message: 'You walk in the woods. You hear music from somewhere far away as well as a noise coming from a pile of leaves.' ,
            option1: 'Go towards the music',
            option1NextState: 10,
            option2: 'Look among the leaves',
            option2NextState: 12,
            video: "assets/video/walk2.mp4",
        },

        {
            id: 8,
            title: 'Walking',
            message: "You keep on walking and look around for any clues as to where Theo might be. What do you do next?",
            option1: 'Look in the woods',
            option1NextState: 12,
            option2: 'Go home',
            option2NextState: 5,
            video: "assets/video/walk.mp4",
        },
        
        {
            id: 9,
            title: 'Would you ever recognize your own dog?',
            message: 'When you walk in to the party. You see a bunch of dogs that come towards you. You feel confused. Is anyone of these Theo?',
            option1: 'Yesbox',
            option1NextState: 11,
            option2: 'Nope',
            option2NextState: 10,
            video: "",
            img: "assets/images/dogs.jpg",
        },
        {
            id: 10,
            title: 'You find him at a party!',
            message: "You party animal. Nice costume. Let's go home",
            img: "assets/images/lion.png",
        },
        
        {
            id: 11,
            title: 'Theo is disapointed in you',
            message: "He is in the corner of the room judging you" + userName + ".",
            img: "assets/images/sad-dog.png",
        },

        {
            id: 12, 
            title: 'You found him!!',
            message: "That was quick " + userName + ". Theo was hiding in the pile of leaves. He is shivering so you put your jacket arond him.",
            img: "assets/images/dog-rain.jpg",
        },
    ];
}