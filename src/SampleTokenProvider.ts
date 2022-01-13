import { AzureMember, ITokenProvider, ITokenResponse, IUser } from '@fluidframework/azure-client'

export class SampleTokenProvider implements ITokenProvider {
  constructor(
    private readonly user?: Pick<AzureMember, "userId">,
  ) { }

  public async fetchOrdererToken(tenantId: string, documentId?: string): Promise<ITokenResponse> {
    return {
      jwt: await this.getToken(tenantId, documentId),
    }
  }

  public async fetchStorageToken(tenantId: string, documentId: string): Promise<ITokenResponse> {
    return {
      jwt: await this.getToken(tenantId, documentId),
    }
  }

  private async getToken(tenantId: string, documentId: string | undefined): Promise<string> {
    return ''
  }
}