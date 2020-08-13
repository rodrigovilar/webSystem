import app from './app';

app.listen({ port: 3000 }, () =>
    console.log(
        `🚀 Server ready and listening at ==> http://localhost:3000/graphql`
    )
);
