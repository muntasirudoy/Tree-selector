export const NodeService = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "Manufacturing",
        data: "Manufacturing",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "0-0",
            label: "Construction materials",
            data: "Construction-materials",
            icon: "pi pi-fw pi-cog",
          },
          {
            key: "0-1",
            label: "Electronics and Optics",
            data: "Electronics-and-Optics",
            icon: "pi pi-fw pi-cog",
          },
          {
            key: "0-2",
            label: "Food and Beverage",
            data: "Food-and-Beverage",
            icon: "pi pi-fw pi-cog",
            children: [
              {
                key: "0-2-0",
                label: "Bakery",
                icon: "pi pi-fw pi-file",
                data: "Bakery",
              },
              {
                key: "0-2-1",
                label: "Beverages",
                icon: "pi pi-fw pi-file",
                data: "Beverages",
              },
              {
                key: "0-2-2",
                label: "Fish",
                icon: "pi pi-fw pi-file",
                data: "Fish",
              },
              {
                key: "0-2-3",
                label: "Meat",
                icon: "pi pi-fw pi-file",
                data: "Meat",
              },
              {
                key: "0-2-4",
                label: "Milk",
                icon: "pi pi-fw pi-file",
                data: "Milk",
              },
              {
                key: "0-2-5",
                label: "Other",
                icon: "pi pi-fw pi-file",
                data: "Other",
              },
              {
                key: "0-2-6",
                label: "Sweets",
                icon: "pi pi-fw pi-file",
                data: "Sweets",
              },
            ],
          },
          {
            key: "0-1",
            label: "Furniture",
            data: "Furniture",
            icon: "pi pi-fw pi-cog",
            children: [
              {
                key: "0-1-0",
                label: "Bathroom",
                icon: "pi pi-fw pi-file",
                data: "Bathroom",
              },
              {
                key: "0-1-1",
                label: "Bedroom",
                icon: "pi pi-fw pi-file",
                data: "Bedroom",
              },
              {
                key: "0-1-2",
                label: "Children’s",
                icon: "pi pi-fw pi-file",
                data: "Children’s",
              },
              {
                key: "0-1-3",
                label: "Living room",
                icon: "pi pi-fw pi-file",
                data: "Living room",
              },
              {
                key: "0-1-4",
                label: "Office",
                icon: "pi pi-fw pi-file",
                data: "Office",
              },
              {
                key: "0-1-5",
                label: "Other",
                icon: "pi pi-fw pi-file",
                data: "Other",
              },
              {
                key: "0-1-6",
                label: "Outdoor",
                icon: "pi pi-fw pi-file",
                data: "Outdoor",
              },
              {
                key: "0-1-7",
                label: "Project furniture",
                icon: "pi pi-fw pi-file",
                data: "Project furniture",
              },
            ],
          },
          {
            key: "0-0-0",
            label: "Machinery",
            data: "Machinery",
            icon: "pi pi-fw pi-cog",
            children: [
              {
                key: "0-1-0",
                label: "Machinery components",
                icon: "pi pi-fw pi-file",
                data: "Machinery-components",
              },
              {
                key: "0-1-1",
                label: "Machinery equipment/tools",
                icon: "pi pi-fw pi-file",
                data: "Machinery-equipment/tools",
              },
              {
                key: "0-1-1",
                label: "Manufacture of machinery ",
                icon: "pi pi-fw pi-file",
                data: "Manufactureofmachinery ",
              },
              {
                key: "0-0-2",
                label: "Maritime",
                data: "Maritime",
                icon: "pi pi-fw pi-cog",
                children: [
                  {
                    key: "0-1-2-0",
                    label: "Aluminium and steel workboats",
                    icon: "pi pi-fw pi-file",
                    data: "Aluminium-and-steel-workboats",
                  },
                  {
                    key: "0-1-2-1",
                    label: "Boat/Yacht building",
                    icon: "pi pi-fw pi-file",
                    data: "Boat/Yacht-building",
                  },
                  {
                    key: "0-1-2-3",
                    label: "Ship repair and conversion",
                    icon: "pi pi-fw pi-file",
                    data: "Ship-repair-and-conversion",
                  },
                ],

                key: "0-0",
                label: "Repair and maintenance service",
                data: "Repair-and-maintenance-service",
                icon: "pi pi-fw pi-cog",
              },
              {
                key: "0-1",
                label: "Metal structures",
                data: "Metal-structures",
                icon: "pi pi-fw pi-cog",
              },
              {
                key: "0-2",
                label: "Other",
                data: "Other",
                icon: "pi pi-fw pi-cog",
              },
              {
                key: "0-3",
                label: "Repair and maintenance service",
                data: "Repair-and-maintenance-service",
                icon: "pi pi-fw pi-cog",
              },
            ],
          },

          {
            key: "0-1",
            label: "Metalworking",
            data: "Metalworking",
            icon: "pi pi-fw pi-cog",
            children: [
              {
                key: "0-1-0",
                label: "Construction of metal structures",
                icon: "pi pi-fw pi-file",
                data: "Construction-of-metal-structures",
              },
              {
                key: "0-1-1",
                label: "Houses and buildings",
                icon: "pi pi-fw pi-file",
                data: "Houses-and-buildings",
              },
              {
                key: "0-1-2",
                label: "Metal products",
                icon: "pi pi-fw pi-file",
                data: "Metal-products",
              },
            ],
          },
        ],
      },
      {
        key: "1",
        label: "Service",
        data: "Manufacturing",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "1-0-0",
            label: "Business services",
            data: "Business-services",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "1-0-1",
            label: "Engineering",
            data: "Engineering",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "1-0-1",
            label: "Information Technology and Telecommunications",
            data: "Information-Technology-and-Telecommunications",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "1-0-1",
            label: "Data processing, Web portals, E-marketing",
            data: "Data-processing-WebE-marketing",
            icon: "pi pi-fw pi-inbox",
          },
        ],
      },
      {
        key: "2",
        label: "Tourism",
        data: "Tourism",
        icon: "pi pi-fw pi-inbox",
      },
      {
        key: "3",
        label: "Translation services",
        data: "Translation services",
        icon: "pi pi-fw pi-inbox",
      },
      {
        key: "4",
        label: "Transport and Logistics",
        data: "Manufacturing",
        icon: "pi pi-fw pi-inbox",
        children: [
          {
            key: "3-0",
            label: "Air",
            data: "Air",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "3-1",
            label: "Rail",
            data: "Rail",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "3-2",
            label: "Road",
            data: "Road",
            icon: "pi pi-fw pi-inbox",
          },
          {
            key: "3-3",
            label: "Water",
            data: "Water",
            icon: "pi pi-fw pi-inbox",
          },
        ],
      },
    ];
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
