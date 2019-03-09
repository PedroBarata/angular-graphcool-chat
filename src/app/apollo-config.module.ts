import { NgModule } from "@angular/core";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { Apollo, ApolloModule } from "apollo-angular";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryCache } from "apollo-cache-inmemory";
@NgModule({
  imports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class ApolloConfigModule {
  constructor(private httpLink: HttpLink, private apollo: Apollo) {
    const uri = "https://api.graph.cool/simple/v1/cjqcu6isv5c2r011502jbmnuw";
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
