import { BlogItem } from "../components/BlogItem"
import { BaseScreenWithBackGround } from "../screens/BaseScreenWithBackGround"

export const BlogsPage = () => {
    return (
        <BaseScreenWithBackGround>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                    <BlogItem authorName="Prajwal Kumar" datePublished={new Date().toDateString()} title={"prajwalaaa first blag"} description={" asdfsdhf  dfksdf dfkfhas fsfsfkafjsjffhsd  sdh fjsfa fha fh s f s fjs fs fs s fsf skfsfs fsd ff s fs fs kf haf has f s f has fs hundefined"} />
                </div>
            </div>
        </BaseScreenWithBackGround >
    )
}