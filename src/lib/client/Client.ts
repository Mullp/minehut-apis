import { IconManager, NetworkManager, ProductManager, ServerManager } from "../../managers";

export class Client {
  /**
   * The server manager used to access server related methods.
   * @type {ServerManager}
   */
  server: ServerManager;

  /**
   * The icon manager used to access icon related methods.
   * @type {IconManager}
   */
  icon: IconManager;

  /**
   * The network manager used to access network related methods.
   * @type {NetworkManager}
   */
  network: NetworkManager;

  /**
   * The product manager used to access product related methods.
   * @type {NetworkManager}
   */
  product: ProductManager;

  public constructor() {
    this.server = new ServerManager(this);
    this.icon = new IconManager(this);
    this.network = new NetworkManager(this);
    this.product = new ProductManager(this);
  }
}
