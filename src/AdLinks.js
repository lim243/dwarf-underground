import React from 'react'

import Link from './Link';

const AdLinks = () => {
    const links = [
        {
            title: 'Single Orcs in Indianapolis',
            src: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
            alt: 'orc',
            href: '#',
        },

        {
            title: 'You won\'t believe what\'s under this mountain',
            src: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
            alt: 'mountain',
            href: '#',
        },

        {
            title: 'Mine 20% more gold with One Weird Trick',
            src: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
            alt: 'gold',
            href: '#',
        },

        {
            title: 'Surprise for Indiana Hobbits born before 1999',
            src: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
            alt: 'hobbit',
            href: '#',
        }
    ]

    return(
        <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
            {links.map(currentLink => <Link link={currentLink}/>)}
        </div>
    )
}

export default AdLinks