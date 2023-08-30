import songs from '~/assets/songs.js';
import classNames from 'classnames/bind';
import styles from './Playlist.module.scss';

const cx = classNames.bind(styles);

function Playlist() {
    // songs.map((song, index) => console.log(song.img));

    return (
        <div className={cx('wrapper')}>
            <h2>Danh sách phát</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className={cx('playing')}>
                        <img className={cx('curr-img')} src={song.img} alt="" />
                        <div className={cx('name-author')}>
                            <div className={cx('song-name')}>{song.name}</div>
                            <div className={cx('song-author')}>{song.singer}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
