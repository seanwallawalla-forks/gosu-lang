package gw.lang.gosuc.simple;

import java.io.File;
import javax.tools.Diagnostic;

/**
 * @author dpetrusca
 */
public interface ICompilerDriver {
  public static final int ERROR = 0;
  public static final int WARNING = 1;

  void sendCompileIssue(Object file, int category, long offset, long line, long column, String message);

  void sendCompileIssue( Diagnostic d );

  void registerOutput(Object sourceFile, File outputFile);
}
