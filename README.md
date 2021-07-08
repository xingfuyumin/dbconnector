# dbconnector
基于node平台实现js配置化访问mysql数据库


  host：您要连接的数据库的主机名。（默认值： localhost）
  port：要连接的端口号。（默认值：3306）
  localAddress：用于 TCP 连接的源 IP 地址。（可选的）
  socketPath: 要连接到的 unix 域套接字的路径。在使用时host 和port被忽略。
  user：要进行身份验证的 MySQL 用户。
  password: 该 MySQL 用户的密码。
  database：用于此连接的数据库名称（可选）。
  charset：连接的字符集。这在 MySQL 的 SQL 级别中称为“排序规则”（如utf8_general_ci）。如果指定了 SQL 级别的字符集（如utf8mb4），则使用该字符集的默认排序规则。（默认值：'UTF8_GENERAL_CI'）
  timezone: MySQL 服务器上配置的时区。这用于将服务器日期/时间值类型转换为 JavaScriptDate对象，反之亦然。这可以是'local', 'Z', 或形式为+HH:MMor的偏移量-HH:MM。（默认值：'local'）
  connectTimeout：在初始连接到 MySQL 服务器期间发生超时之前的毫秒数。（默认值：10000）
  stringifyObjects: 字符串化对象而不是转换为值。见问题#501。（默认值：false）
  insecureAuth：允许连接到要求旧（不安全）身份验证方法的 MySQL 实例。（默认值：false）
  typeCast：确定是否应将列值转换为原生 JavaScript 类型。（默认值：true）
  queryFormat：自定义查询格式功能。请参阅自定义格式。
  supportBigNumbers: 在处理数据库中的大数（BIGINT 和 DECIMAL 列）时，您应该启用此选项（默认值：false）。
  bigNumberStrings：启用supportBigNumbers和bigNumberStrings强制大数字（BIGINT 和 DECIMAL 列）始终作为 JavaScript 字符串对象返回（默认值：）false。仅当它们无法用JavaScript Number 对象准确表示时 （当它们超出 [-2^53, +2^53] 范围时会发生这种情况），启用supportBigNumbers但bigNumberStrings禁用时才会将大数字作为 String 对象返回，否则它们将作为 Number 返回对象。如果禁用，则忽略此选项。supportBigNumbers
  dateStrings：强制日期类型（TIMESTAMP、DATETIME、DATE）作为字符串返回，而不是膨胀为 JavaScript 日期对象。可以是true/false或类型名称数组以保留为字符串。（默认值：false）
  debug：将协议详细信息打印到标准输出。可以是true/false或应打印的数据包类型名称数组。（默认值：false）
  trace：生成堆栈跟踪Error以包括库入口的调用站点（“长堆栈跟踪”）。大多数呼叫的轻微性能损失。（默认值：true）
  localInfile: 允许LOAD DATA INFILE使用LOCAL修饰符。（默认值：true）
  multipleStatements: 每个查询允许多个 mysql 语句。小心这一点，它可能会增加 SQL 注入攻击的范围。（默认值：false）
  flags：除默认设置之外要使用的连接标志列表。也可以将默认值列入黑名单。有关更多信息，请检查 连接标志。
  ssl: 带有 ssl 参数的对象或包含 ssl 配置文件名称的字符串。请参阅SSL 选项。