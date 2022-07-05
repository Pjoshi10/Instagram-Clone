import { USERS } from "./users";

export const POSTS = [
    {
        userName: USERS[0].userName,
        profilePicture: USERS[0].profilePicture,
        postImage: require('/Users/macos20/Desktop/instagram_Clone/src/assets/images/users/hiritik_post.jpeg'),
        likes: 4598,
        caption: "Be Confident!",
        comments: [
            {
                userName: 'Rajkumar Rao',
                comment: 'Wow!!'
            },
            {
                userName: 'Katrina K',
                comment: 'Kaaash muje bhi ye movie mei role milta :)'
            }
        ]
        

    },
    {
        userName: USERS[1].userName,
        profilePicture: USERS[1].profilePicture,
        postImage: require('/Users/macos20/Desktop/instagram_Clone/src/assets/images/users/ranbir_post.jpeg'),
        likes: 2541,
        caption: "Together forever",
        comments: [
            {
                userName: 'Katrina K',
                comment: 'gonna tell vikky about this'
            }
        ]
        

    },
    {
        userName: USERS[2].userName,
        profilePicture: USERS[2].profilePicture,
        postImage: require('/Users/macos20/Desktop/instagram_Clone/src/assets/images/users/gujarat_post.jpeg'),
        likes: 7898,
        caption: "Ant mein jeet cricket ki hai…",
        comments: [
            
        ]
        

    },
    {
        userName: USERS[3].userName,
        profilePicture: USERS[3].profilePicture,
        postImage: require('/Users/macos20/Desktop/instagram_Clone/src/assets/images/users/ambani_post.jpeg'),
        likes: 467821,
        caption: "All of us, in a sense, struggle continuously all the time, because we never get what we want",
        comments: [
            {
                userName: 'Adani Gautam',
                comment: 'Su vaat che partner '
            },
            {
                userName: 'Anil Ambani',
                comment: '25 dino mei paisa double'
            }
        ]
        

    }
]