// This file has been autogenerated.
exports.mockedProfile = {
  subscriptionId: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
  randomIds: [ 'armclistorageaccount9936', 'armclistorageGroup9202']
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'aede7eb3dd9e427da879365ebcdb37ea',
  date: 'Wed, 26 Jun 2013 18:35:08 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/?properties=georegions')
  .reply(200, "<GeoRegions xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><GeoRegion><Description i:nil=\"true\"/><Name>North Central US</Name><SortOrder>0</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>West US</Name><SortOrder>1</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East US</Name><SortOrder>2</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>East Asia</Name><SortOrder>3</SortOrder></GeoRegion><GeoRegion><Description i:nil=\"true\"/><Name>North Europe</Name><SortOrder>5</SortOrder></GeoRegion></GeoRegions>", { 'cache-control': 'private',
  'content-length': '613',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'edbbe3c87b5f402ba4a5be649b19e12f',
  date: 'Wed, 26 Jun 2013 18:35:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/?properties=dnssuffix')
  .reply(200, "<string xmlns=\"http://schemas.microsoft.com/2003/10/Serialization/\">azurewebsites.net</string>", { 'cache-control': 'private',
  'content-length': '94',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'c0a899dac3d34039a37848fb37f7e93b',
  date: 'Wed, 26 Jun 2013 18:35:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '6bbdf76a2c50478f807740618fd23a30',
  date: 'Wed, 26 Jun 2013 18:35:14 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites', '*')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk1.azurewebsites.net</a:string><a:string>websitesdk1.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk1.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk1.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk1.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:35:17.183</LastModifiedTimeUtc><Name>websitesdk1</Name><Owner i:nil=\"true\"/><RepositorySiteName>websitesdk1</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/websitesdk1</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1922',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '0a2599349e774632947c3083c0cce288',
  date: 'Wed, 26 Jun 2013 18:35:24 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/websitesdk1')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '26bdfded14674ea7b5120446d6b7e944',
  date: 'Wed, 26 Jun 2013 18:35:26 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b67233dd5d0c4561ae7e372e60e5cee0',
  date: 'Wed, 26 Jun 2013 18:35:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites', '*')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk2.azurewebsites.net</a:string><a:string>websitesdk2.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk2.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk2.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk2.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:35:31.493</LastModifiedTimeUtc><Name>websitesdk2</Name><Owner i:nil=\"true\"/><RepositorySiteName>websitesdk2</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/websitesdk2</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1922',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'e6692300c89d4f31928ae5e440c17afa',
  date: 'Wed, 26 Jun 2013 18:35:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/')
  .reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk2.azurewebsites.net</a:string><a:string>websitesdk2.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk2.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk2.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk2.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:35:31.493</LastModifiedTimeUtc><Name>websitesdk2</Name><Owner i:nil=\"true\"/><RepositorySiteName>websitesdk2</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/websitesdk2</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site><Site><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests6092.azurewebsites.net</a:string><a:string>clitests6092.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests6092.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>clitests6092.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>clitests6092.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:32:50.173</LastModifiedTimeUtc><Name>clitests6092</Name><Owner i:nil=\"true\"/><RepositorySiteName>clitests6092</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/clitests6092</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site></Sites>", { 'cache-control': 'private',
  'content-length': '3765',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'a75fcd8d53c145f2a18216d9732c60dc',
  date: 'Wed, 26 Jun 2013 18:35:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/websitesdk2')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '9e43053b2637488988c915372a4f02a4',
  date: 'Wed, 26 Jun 2013 18:35:43 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/')
  .reply(200, "<WebSpaces xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>hk1</GeoLocation><GeoRegion>East Asia</GeoRegion><Name>eastasiawebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>BLU</GeoLocation><GeoRegion>East US</GeoRegion><Name>eastuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>CH1</GeoLocation><GeoRegion>North Central US</GeoRegion><Name>northcentraluswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>DB3</GeoLocation><GeoRegion>North Europe</GeoRegion><Name>northeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>AM2</GeoLocation><GeoRegion>West Europe</GeoRegion><Name>westeuropewebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace><WebSpace><AvailabilityState>Normal</AvailabilityState><ComputeMode i:nil=\"true\"/><CurrentNumberOfWorkers i:nil=\"true\"/><CurrentWorkerSize i:nil=\"true\"/><GeoLocation>bay</GeoLocation><GeoRegion>West US</GeoRegion><Name>westuswebspace</Name><NumberOfWorkers i:nil=\"true\"/><Plan>VirtualDedicatedPlan</Plan><Status>Ready</Status><Subscription>db1ab6f0-4769-4b27-930e-01e2ef9c123c</Subscription><WorkerSize i:nil=\"true\"/></WebSpace></WebSpaces>", { 'cache-control': 'private',
  'content-length': '2732',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '4545a6eb2702468d90dd7ecdfd816abc',
  date: 'Wed, 26 Jun 2013 18:35:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites', '*')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk3.azurewebsites.net</a:string><a:string>websitesdk3.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk3.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk3.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk3.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:35:49.107</LastModifiedTimeUtc><Name>websitesdk3</Name><Owner i:nil=\"true\"/><RepositorySiteName>websitesdk3</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/websitesdk3</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1922',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'b1cf4634db9b42ce8f8d9991296380b4',
  date: 'Wed, 26 Jun 2013 18:35:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/websitesdk3')
  .reply(200, "<Site xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><AdminEnabled>true</AdminEnabled><AvailabilityState>Normal</AvailabilityState><ComputeMode>Shared</ComputeMode><ContentAvailabilityState>Normal</ContentAvailabilityState><Enabled>true</Enabled><EnabledHostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk3.azurewebsites.net</a:string><a:string>websitesdk3.scm.azurewebsites.net</a:string></EnabledHostNames><HostNameSslStates><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk3.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState><HostNameSslState><IpBasedSslResult i:nil=\"true\"/><Name>websitesdk3.scm.azurewebsites.net</Name><SslState>Disabled</SslState><Thumbprint i:nil=\"true\"/><ToUpdate i:nil=\"true\"/><ToUpdateIpBasedSsl i:nil=\"true\"/><VirtualIP i:nil=\"true\"/></HostNameSslState></HostNameSslStates><HostNames xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"><a:string>websitesdk3.azurewebsites.net</a:string></HostNames><LastModifiedTimeUtc>2013-06-26T18:35:49.107</LastModifiedTimeUtc><Name>websitesdk3</Name><Owner i:nil=\"true\"/><RepositorySiteName>websitesdk3</RepositorySiteName><RuntimeAvailabilityState>Normal</RuntimeAvailabilityState><SSLCertificates/><SelfLink>https://waws-prod-hk1-001.api.azurewebsites.windows.net:454/subscriptions/db1ab6f0-4769-4b27-930e-01e2ef9c123c/webspaces/eastasiawebspace/sites/websitesdk3</SelfLink><ServerFarm i:nil=\"true\"/><SiteMode>Limited</SiteMode><SiteProperties><AppSettings i:nil=\"true\"/><Metadata i:nil=\"true\"/><Properties/></SiteProperties><State>Running</State><StorageRecoveryDefaultState>Running</StorageRecoveryDefaultState><UsageState>Normal</UsageState><WebSpace>eastasiawebspace</WebSpace></Site>", { 'cache-control': 'private',
  'content-length': '1922',
  'content-type': 'application/xml; charset=utf-8',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '9917b0fbaa634cb0a4063bec385553e1',
  date: 'Wed, 26 Jun 2013 18:35:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/webspaces/eastasiawebspace/sites/websitesdk3')
  .reply(200, "", { 'cache-control': 'private',
  'transfer-encoding': 'chunked',
  server: '33.0.6198.60 (rd_rdfe_stable.130622-2036) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'f44cfed7872743a59cc38226001ff040',
  date: 'Wed, 26 Jun 2013 18:36:00 GMT' });
 return result; }]];