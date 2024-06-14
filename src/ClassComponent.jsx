import React, { Component } from 'react';
class Avatar extends Component {
    render() {
        const { person, size } = this.props;
        return (
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
            />
        );
    }
}

export default class Profile extends Component {
    render() {
        return (
            <>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2',
                    }}
                />
                <Avatar
                    size={80}
                    person={{
                        name: 'Aklilu Lemma',
                        imageId: 'OKS67lh',
                    }}
                />
                <Avatar
                    size={50}
                    person={{
                        name: 'Lin Lanying',
                        imageId: '1bX5QH6',
                    }}
                />
            </>
        );
    }
}

function getImageUrl(person, size = 's') {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
