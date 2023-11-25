var APP_DATA = {
  "scenes": [
    {
      "id": "0-poo-da-lua",
      "name": "Poço Da Lua",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.21145722722933336,
        "pitch": -0.2805966012783774,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -1.345449752924143,
          "pitch": 0.13230352495032704,
          "rotation": 0.7853981633974483,
          "target": "1-trilha"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1735588768614527,
          "pitch": 0.024512085415320684,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Poço da Lua</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">A primeira parada é no Poço da Lua, que antecede a cachoeira principal e oferece uma vista incrível do local. É possível nadar no Poço da Lua quando a água estiver limpa. No entanto, é sempre importante garantir que as condições sejam seguras antes de entrar na água.</font></font>"
        },
        {
          "yaw": -1.9326288195681514,
          "pitch": -0.08417669127320515,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Trilha&nbsp;</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Após a entrada, é possível seguir a trilha até o Poço da Lua ou seguir direto para a cachoeira principal.</font></font>"
        }
      ]
    },
    {
      "id": "1-trilha",
      "name": "Trilha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.9328642857679235,
        "pitch": -0.1720456316753296,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.9170776940982286,
          "pitch": -0.12602616930025512,
          "rotation": 5.497787143782138,
          "target": "0-poo-da-lua"
        },
        {
          "yaw": 1.801226265888821,
          "pitch": 0.10967777618803431,
          "rotation": 0.7853981633974483,
          "target": "2-trilha-dentro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2326145898544194,
          "pitch": -0.11676362125818684,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Estrada</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">É possível seguir de carro até a prainha, onde há acesso aos banheiros e uma área com mesas e bancos.</font></font>"
        }
      ]
    },
    {
      "id": "2-trilha-dentro",
      "name": "Trilha dentro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.5491074978717183,
        "pitch": -0.1334937899787132,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.18133773108214157,
          "pitch": 0.14116446281566297,
          "rotation": 0.7853981633974483,
          "target": "4-escada"
        },
        {
          "yaw": -2.9892076608034195,
          "pitch": 0.307823441467292,
          "rotation": 0.7853981633974483,
          "target": "3-prainha"
        },
        {
          "yaw": 2.4592292757480347,
          "pitch": 0.14985125475579686,
          "rotation": 5.497787143782138,
          "target": "1-trilha"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.813927419612801,
          "pitch": 0.3681503738887084,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Decisão</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Você pode decidir continuar a trilha à esquerda para ir à prainha, ou virar à direita para ter acesso à cachoeira principal.</font></font><br>"
        }
      ]
    },
    {
      "id": "3-prainha",
      "name": "Prainha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.8262042092575701,
        "pitch": -0.3392134512937677,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.9324173598954388,
          "pitch": -0.0731954306188296,
          "rotation": 5.497787143782138,
          "target": "2-trilha-dentro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.125418323507544,
          "pitch": -0.0036273542620453014,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Prainha</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Aqui&nbsp;</font></font></font></font>você tem acesso a uma prainha com mesas e bancos espalhados pelo local. Também é possível realizar a prática de pesca. Isso torna o local ainda mais agradável para passar o dia, seja para relaxar à beira da água ou para desfrutar de um piquenique."
        }
      ]
    },
    {
      "id": "4-escada",
      "name": "Escada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -1.7196318609664694,
        "pitch": -0.1476244203524928,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 3.099436330372069,
          "pitch": -0.3110724877693034,
          "rotation": 0,
          "target": "2-trilha-dentro"
        },
        {
          "yaw": 0.3057877265687523,
          "pitch": 0.23096303697055198,
          "rotation": 0,
          "target": "5-cachoeira-principal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.521107410261619,
          "pitch": -0.08338295997712208,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Cachoeira</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Ao atravessar essa parte, você tem acesso a um local onde é possível sentir a brisa do dia e se refrescar.</font></font></font></font>"
        }
      ]
    },
    {
      "id": "5-cachoeira-principal",
      "name": "Cachoeira principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.78319696559603,
        "pitch": -0.4180932461444389,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.7623819433756314,
          "pitch": 0.10887897062346141,
          "rotation": 6.283185307179586,
          "target": "4-escada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.814816719773231,
          "pitch": 0.11451564236105582,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Aproveite</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">É possível tomar banho de cachoeira, mas é importante ter atenção ao caminho. </font><font style=\"vertical-align: inherit;\">O rio em si não é fundo, mas é necessário tomar cuidado com a correnteza.</font></font><br>"
        }
      ]
    }
  ],
  "name": "Tour Cachoeira Raulino",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
