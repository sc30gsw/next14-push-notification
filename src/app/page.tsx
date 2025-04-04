import { AppTabs } from '@/features/home/app-tabs'
import { Counter } from '@/features/home/counter'
import { auth0 } from '@/lib/auth0'

const Home = async () => {
  const session = await auth0.getSession()

  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center my-6">
      <AppTabs isAuthenticated={!!session}>
        <h1 className="text-2xl font-bold">Recipe App</h1>
        {session ? (
          <div>
            <p>
              Welcome{' '}
              <span className="font-bold text-blue-500">
                {session.user.name}
              </span>
            </p>
            <a href="/auth/logout">Log out</a>
          </div>
        ) : (
          <a href="/auth/login">Log in</a>
        )}
      </AppTabs>
      <Counter />
    </div>
  )
}

export default Home
