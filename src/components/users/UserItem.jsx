import { Link } from 'react-router-dom';

function UserItem({ user }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={user.avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{user.login}</h2>
          <Link
            to={`/user/${user.login}`}
            className='text-opacity-40 text-base-content'
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
