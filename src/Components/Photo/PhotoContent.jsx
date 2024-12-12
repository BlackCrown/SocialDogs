import React from 'react';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const user = React.useContext(UserContext);
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        {<img src={photo.src} alt={photo.title} />}
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.vizualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.atributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments.reverse()} />
    </div>
  );
};

export default PhotoContent;
