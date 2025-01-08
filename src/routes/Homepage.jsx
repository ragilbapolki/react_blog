import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPost from "../components/FeaturedPost"
import PostList from "../components/PostList"

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            {/*Breadcrumb*/}
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span>.</span>
                <span className="text-blue-800">Blogs and Articles </span>
            </div>
            {/*Introduction*/}
            <div className="flex items-center justify-between">
                {/*Featured posts*/}
                <div className="">
                    <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
                        Lorem ipsum dolor sit amet consectetur, 
                    </h1>
                    <p className="mt-8 text-md md:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum autem consequatur laborum nam at animi, amet ab dolor laboriosam nostrum maiores eligendi quo sed id reprehenderit nesciunt ratione. Cupiditate, voluptate.
                    </p>
                </div>
                {/*Animated*/}
                <Link to="write"></Link>
            </div>
            {/*Categories*/}
            <MainCategories />
            {/*Featured posts*/}
            <FeaturedPost /> 
            <div className="">
                <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
                <PostList />
            </div>
            {/*Post list*/}
            {/*Post list*/}
        </div>
    )
}

export default Homepage