import { NgModule } from "@angular/core";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { Apollo, ApolloModule } from "apollo-angular";
import { ApolloLink } from "apollo-link";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";

import { environment } from "src/environments/environment";
@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class ApolloConfigModule {
  constructor(private httpLink: HttpLink, private apollo: Apollo) {
    const uri = "https://api.graph.cool/simple/v1/cjqcu6isv5c2r011502jbmnuw";
    const http = httpLink.create({ uri });

    const linkError = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    });

    apollo.create({
      link: ApolloLink.from([linkError, http]),
      cache: new InMemoryCache(),
      connectToDevTools: !environment.production
    });
  }
}
