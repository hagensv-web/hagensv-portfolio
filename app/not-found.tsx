import StyledLink from "@/components/core/StyledLink";

export default function NotFoundPage(){
    return (
        <div>
            <h1>Whoops, Something Went Wrong</h1>
            <p>I am so terribly sorry. The page you are looking for appears to have gone missing.</p>
            <p><StyledLink href="/">Go Back</StyledLink></p>
        </div>
    )
}