import nock from 'nock'

export const mockContractCallResponseSuccess = (): nock.Scope =>
  nock('http://localhost:8545', {
    encodedQueryParams: true,
  })
    .persist()
    .post('/', { method: 'eth_chainId', params: [], id: /^\d+$/, jsonrpc: '2.0' })
    .reply(200, (_, request) => ({ jsonrpc: '2.0', id: request['id'], result: '0xaa36a7' }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
    .persist()
    // Get vault data
    .post('/', {
      method: 'eth_call',
      params: [
        {
          to: '0x334d9890b339a1b2e0f592f26b5374e22afdfbdf',
          data: '0x9df6f02a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064',
        },
        'latest',
      ],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result:
          '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000048000000000000000000000000000000000000000000000000000000000000007a00000000000000000000000000000000000000000000000000000000000000ac00000000000000000000000000000000000000000000000000000000000000de00000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000000142000000000000000000000000000000000000000000000000000000000000017400000000000000000000000000000000000000000000000000000000000001a600000000000000000000000000000000000000000000000000000000000001d8000000000000000000000000000000000000000000000000000000000000020a05846d3fa6820e12aa40c2110eecc927b3dd78cac81903d44c1670862de3326140000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f3400000000000000000000000000000000000000000000000000000000661e609300000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000040626630383434343166643732666362303632396366346632333631623562343462366239366637373935393636643436643564346565636166663563656433660000000000000000000000000000000000000000000000000000000000000040343232326434343030353834353439646335333966643931656232373963373833356536646539333661643133323835666138623435666665356236356261340000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004038663134363531663065393866343962353339316263353735653336663365613235383232663234383261656466306262313365363830366534306462396232e1157dc757ffe0f5d5ee79d76f1cb2f5bf16afb87365d46407443bd6fef714f00000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006621f49100000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000040663835356538623639303034393436613263343636366234623161303634313533343166356662353836366261343032336431396161313565336338356434300000000000000000000000000000000000000000000000000000000000000040306533363565663164396135396536613231393761616661356637383536303763313462353866316637633761613032316134326236353737626162653531640000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004038663134363531663065393866343962353339316263353735653336663365613235383232663234383261656466306262313365363830366534306462396232dcdb31724f5c4ac982e80bef3d4b995f54265b64a53beee2cfaf2b1c067a391a0000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006621f5b700000000000000000000000000000000000000000000000000000000001e84800000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000000004061396166656538343662633337373161306663313762326462663466336162373533336466373861633064376363326261383562303836323434333838336136000000000000000000000000000000000000000000000000000000000000004065666230313735636634363362653731646261323564626365313233376636383339336632326662303333336565653331316135383433376637373839376566000000000000000000000000000000000000000000000000000000000000004230323162333466333664383438376365336137613666303132346635383835346435363163623532303737353933643165383639373366616330666561316138623100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000403866313436353166306539386634396235333931626335373565333666336561323538323266323438326165646630626231336536383036653430646239623237fb00d2740accdd68016fc439e8e29b75f37c8f6305b5ca85c6470347aa8d860000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006630b2f300000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000000000000000000000000000000000000000004066353463363338316135353036343339303864393864323166353231316266336531666364313764636536396236323437343662613334636638663036393438000000000000000000000000000000000000000000000000000000000000004031653564366566633837343431306536363638626239336631376464633366326434356262356338313863626132323634653139303861336462396162663361000000000000000000000000000000000000000000000000000000000000004230323162333466333664383438376365336137613666303132346635383835346435363163623532303737353933643165383639373366616330666561316138623100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000403866313436353166306539386634396235333931626335373565333666336561323538323266323438326165646630626231336536383036653430646239623286ef2acb07f02526d1375709a27b605db6b05214b08a3fc9283196997e7693750000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006630b49200000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000040623736353536396231616337353530323762636539323166656465353835356139343765613962616538353462393035646361383737653961646364326631360000000000000000000000000000000000000000000000000000000000000040363335643561386137323936303238363932356164386162313739393630373965353133323537396339363135633634376131396533333439616330616539360000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004038663134363531663065393866343962353339316263353735653336663365613235383232663234383261656466306262313365363830366534306462396232e0d48b68171fd4c8e06a86d5fe7abb6d0f879390040e23b7677696db2e9d3c7c0000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006630b72100000000000000000000000000000000000000000000000000000000004c4b400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000040626637623361653633393432363266393633343939636237626235663430393966313834383861373162336134393031396565343937316461653166333562350000000000000000000000000000000000000000000000000000000000000040646433323034353164303134383936303661373830366336346237656638393235383232386232636462636662353366386465366335623133303736633634630000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004038663134363531663065393866343962353339316263353735653336663365613235383232663234383261656466306262313365363830366534306462396232b87c53297e148671a8767c4d65de9c3447d40584232a72c527442f7dcab283ea0000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f3400000000000000000000000000000000000000000000000000000000663c921200000000000000000000000000000000000000000000000000000000001e84800000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000000406334616266363539653263343239633938626634366530643930616531366530303938366434656139313162663234333432306165613261646565323037666300000000000000000000000000000000000000000000000000000000000000403036386432613931316331613064313064373937383263316536656562656466363866663133383430363738366363633963366233376330353436363862343600000000000000000000000000000000000000000000000000000000000000423032316233346633366438343837636533613761366630313234663538383534643536316362353230373735393364316538363937336661633066656131613862310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040386631343635316630653938663439623533393162633537356533366633656132353832326632343832616564663062623133653638303665343064623962329bc52be68598980c7685adafada04a81e4bb50ac6d32bfd4a77f2371d3ec26220000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f3400000000000000000000000000000000000000000000000000000000664f0fa100000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000000406632613234373531386537346432353739656164343836653662623030636336663633393539393037336638373465306538623432626339396564303039393600000000000000000000000000000000000000000000000000000000000000403232636264366438353435663663323965396466393135633066303134306435343930343230343163306336316465613432306533653063343535336233323900000000000000000000000000000000000000000000000000000000000000423032316233346633366438343837636533613761366630313234663538383534643536316362353230373735393364316538363937336661633066656131613862310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040623336323933316533653463663363633230663735616531316666356134633131356563313534386362356632633763343832393439323966316538393739639384d2b7b05bd96def15f268de7d486f3705f16625ec2c8db11428f0946f9fa90000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f3400000000000000000000000000000000000000000000000000000000664f4cbc00000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000000000040363666653861383730376631613332363637616135373065373234313661336330363430356461613335373763363033646431356265333831393330636137310000000000000000000000000000000000000000000000000000000000000040363236626138303665313466356466646236343136643938313830376163646261353137313431333564613437636562393534666337316663383965346233320000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004038663134363531663065393866343962353339316263353735653336663365613235383232663234383261656466306262313365363830366534306462396232493ec75561131a09b06a9ab53cb1a5a35b55760b1db8ef4f62bc00066f0430380000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f34000000000000000000000000000000000000000000000000000000006650894900000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000000403265396430396638333034623662646636333561646565663739396662396634653234333462636135303865656362333561646234313438306532346165633300000000000000000000000000000000000000000000000000000000000000403261323230663034336666333463666361353764393130323039666136373663383232323061383137646135656266303966313435636330313264386138356300000000000000000000000000000000000000000000000000000000000000423032316233346633366438343837636533613761366630313234663538383534643536316362353230373735393364316538363937336661633066656131613862310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040623336323933316533653463663363633230663735616531316666356134633131356563313534386362356632633763343832393439323966316538393739639399fc7c386e7357fc101e638f3e208dcb95fbe06c47e3ff4219d5c7266352220000000000000000000000002940fcbb3c32901df405da0e96fd97d1e2a53f3400000000000000000000000000000000000000000000000000000000665f1dd70000000000000000000000000000000000000000000000000000000001312d000000000000000000000000000dd4f29e21f10cb2e485cf9bdab9f2dd1f240bfa0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000000403264363465656665343863643230396334643534396230363564336330346463623239616635376230316361326139386332343237346561653237333230323900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042303231623334663336643834383763653361376136663031323466353838353464353631636235323037373539336431653836393733666163306665613161386231000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004062333632393331653365346366336363323066373561653131666635613463313135656331353438636235663263376334383239343932396631653839373963',
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .persist()
    // Get attestator public key
    .post('/', {
      method: 'eth_call',
      params: [
        {
          to: '0x334d9890b339a1b2e0f592f26b5374e22afdfbdf',
          data: '0xf9dcaf32',
        },
        'latest',
      ],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result:
          '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000006f787075623643314632537741445033544e616a516a673250616e694547705a4c7657644d694650384368506a514252574431585542654d644534596b5159766e4e684159476f5a4b666351627352436566736572423544794a4d375239565236636536764c725848566665717948330000000000000000000000000000000000',
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .persist()

export const mockBitcoinRPCResponseSuccess = (): nock.Scope =>
  nock('http://localhost:8554', {
    encodedQueryParams: true,
  })
    .persist()
    .post('/', {
      method: 'getrawtransaction',
      params: ['2d64eefe48cd209c4d549b065d3c04dcb29af57b01ca2a98c24274eae2732029', true, null],
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request) => ({
        result: {
          txid: '2d64eefe48cd209c4d549b065d3c04dcb29af57b01ca2a98c24274eae2732029',
          hash: '6ad243335f2fd3fc9a9fbdc22f274dc3b3d7b5d751d7250f6952a4d4195156da',
          version: 2,
          size: 265,
          vsize: 184,
          weight: 733,
          locktime: 0,
          vin: [
            {
              txid: 'e0fea50a2612b77636b28eb3bf8c8e28828222b1630781a08fad9ff301f5c686',
              vout: 0,
              scriptSig: {
                asm: '',
                hex: '',
              },
              txinwitness: [
                '3044022038e610786660d77694446393e2357ac00b112b446695d61ea218d4d203a08a98022042826be31f000e7fbcb0097e9d4cb453c6aa4c7b390d55dbcc7c1039f878d55301',
                '023481876b8dce7bb7ce58d0bbe7b13a3973b8c52de6b81bacfe3fb43499b0bea2',
              ],
              sequence: 4294967295,
            },
          ],
          vout: [
            {
              value: 0.2,
              n: 0,
              scriptPubKey: {
                asm: '1 849ca80d8b8975f263bdd02b1148630c7304690c9aa3125b9de0aeebeaa5cffe',
                desc: 'rawtr(849ca80d8b8975f263bdd02b1148630c7304690c9aa3125b9de0aeebeaa5cffe)#hfs92zrd',
                hex: '5120849ca80d8b8975f263bdd02b1148630c7304690c9aa3125b9de0aeebeaa5cffe',
                address: 'bc1psjw2srvt396lycaa6q43zjrrp3esg6gvn233ykuauzhwh649ellq84v25w',
                type: 'witness_v1_taproot',
              },
            },
            {
              value: 0.002,
              n: 1,
              scriptPubKey: {
                asm: '0 2d2d0c13815a141129c9df2ab9b68344398de74b',
                desc: 'addr(bc1q95kscyuptg2pz2wfmu4tnd5rgsucme6tpx900g)#dyf9q8ne',
                hex: '00142d2d0c13815a141129c9df2ab9b68344398de74b',
                address: 'bc1q95kscyuptg2pz2wfmu4tnd5rgsucme6tpx900g',
                type: 'witness_v0_keyhash',
              },
            },
            {
              value: 0.00792272,
              n: 2,
              scriptPubKey: {
                asm: '0 05b8d44eb1d67d47192c6168a24cb4e5b5a7b438',
                desc: 'addr(bc1qqkudgn436e75wxfvv952yn95uk660dpc7ve7vq)#qux6ypdg',
                hex: '001405b8d44eb1d67d47192c6168a24cb4e5b5a7b438',
                address: 'bc1qqkudgn436e75wxfvv952yn95uk660dpc7ve7vq',
                type: 'witness_v0_keyhash',
              },
            },
          ],
          hex: '0200000000010186c6f501f39fad8fa0810763b1228282288e8cbfb38eb23676b712260aa5fee00000000000ffffffff03002d310100000000225120849ca80d8b8975f263bdd02b1148630c7304690c9aa3125b9de0aeebeaa5cffe400d0300000000001600142d2d0c13815a141129c9df2ab9b68344398de74bd0160c000000000016001405b8d44eb1d67d47192c6168a24cb4e5b5a7b43802473044022038e610786660d77694446393e2357ac00b112b446695d61ea218d4d203a08a98022042826be31f000e7fbcb0097e9d4cb453c6aa4c7b390d55dbcc7c1039f878d5530121023481876b8dce7bb7ce58d0bbe7b13a3973b8c52de6b81bacfe3fb43499b0bea200000000',
          blockhash: '000000000000000000014cd79802b29c1dcd7fc6debee1e3968cfc216b59bf16',
          confirmations: 360,
          time: 1717510168,
          blocktime: 1717510168,
        },
        error: null,
        id: null,
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .persist()